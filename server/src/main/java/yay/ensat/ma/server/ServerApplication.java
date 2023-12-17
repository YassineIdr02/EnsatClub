package yay.ensat.ma.server;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import yay.ensat.ma.server.security.securityConfig.RsaKeysConfig;
import yay.ensat.ma.server.security.services.SecurityService;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeysConfig.class)
public class ServerApplication {
    private SecurityService securityService;

    public ServerApplication(SecurityService securityService) {
        this.securityService = securityService;
    }

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    //@Bean
    CommandLineRunner commandLineRunner(){
        return args ->{

        };
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
