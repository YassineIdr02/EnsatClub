package yay.ensat.ma.server.security.securityConfig;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.web.SecurityFilterChain;
import yay.ensat.ma.server.security.models.AppUser;
import yay.ensat.ma.server.security.services.SecurityService;

import java.util.ArrayList;
import java.util.Collection;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)

public class SecurityConfig {
    private RsaKeysConfig rsaKeysConfig;
    private PasswordEncoder passwordEncoder;
    private SecurityService securityService;

    public SecurityConfig(RsaKeysConfig rsaKeysConfig, PasswordEncoder passwordEncoder, SecurityService securityService) {
        this.rsaKeysConfig = rsaKeysConfig;
        this.passwordEncoder = passwordEncoder;
        this.securityService = securityService;
    }

    @Bean

    public AuthenticationManager authenticationManager(UserDetailsService userDetailsService){
        var authProvider = new DaoAuthenticationProvider();
        authProvider.setPasswordEncoder(passwordEncoder);
        authProvider.setUserDetailsService(userDetailsService);
        return new ProviderManager(authProvider);

    }

    @Bean
    public UserDetailsService inMemoryUserDetailsManager(){
        return username -> {
            AppUser appUser = securityService.loadUserByUserName(username);
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(appUser.getAuthority());
            Collection<GrantedAuthority> authorities = new ArrayList<>();
            authorities.add(authority);
            User user = new User(appUser.getUsername(), appUser.getPassword(),authorities);
            return user;
        };
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf-> csrf.disable())
                .authorizeHttpRequests(auth->auth.requestMatchers("/login/**").permitAll())
                .authorizeHttpRequests(auth->auth.requestMatchers("/newActivity/**").permitAll())
                .authorizeHttpRequests(auth->auth.requestMatchers("/allclubs").permitAll())
                .authorizeHttpRequests(auth->auth.anyRequest().authenticated())
                .sessionManagement(sess->sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .oauth2ResourceServer(oa->oa.jwt(Customizer.withDefaults()))
                .build();
    }
    @Bean
    public  JwtDecoder jwtDecoder(){
        return NimbusJwtDecoder.withPublicKey(rsaKeysConfig.publicKey()).build();
}

    @Bean
    public  JwtEncoder jwtEncoder(){
        JWK jwk =new RSAKey.Builder(rsaKeysConfig.publicKey()).privateKey(rsaKeysConfig.privateKey()).build();
        JWKSource<SecurityContext> jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwkSource);
    }

}
