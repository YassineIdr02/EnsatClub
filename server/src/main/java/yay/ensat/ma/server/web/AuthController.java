package yay.ensat.ma.server.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import yay.ensat.ma.server.security.models.AppUser;
import yay.ensat.ma.server.services.Interfaces.MemberService;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
public class  AuthController {
    private  JwtEncoder jwtEncoder;
    private AuthenticationManager authenticationManager;
   private MemberService memberService;


    public AuthController(JwtEncoder jwtEncoder,MemberService memberService, AuthenticationManager authenticationManager) {
        this.jwtEncoder = jwtEncoder;
        this.authenticationManager = authenticationManager;

        this.memberService = memberService;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> jwtToken(AppUser appUser){

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(appUser.getUsername(), appUser.getPassword()));
        String subject =authentication.getName();
        String scope = authentication.getAuthorities().stream().map(aut -> aut.getAuthority()).collect(Collectors.joining(" "));

        Map<String,String> idToken = new HashMap<>();
        Instant instant = Instant.now();
        JwtClaimsSet jwtClaimsSet = JwtClaimsSet.builder()
                .subject(subject)
                .issuedAt(instant)
                .expiresAt(instant.plus( 70, ChronoUnit.MINUTES))
                .issuer("ysf-security")
                .claim("scope",scope)
                .build();

        String jwtAccessToken = jwtEncoder.encode(JwtEncoderParameters.from(jwtClaimsSet)).getTokenValue();
        idToken.put("accessToken", jwtAccessToken);
        idToken.put("role",scope);
        idToken.put("username",subject);
        // before this we should check if this user is a sysadmin (not president)
        // hadi gha provisoire
       idToken.put("clubId",memberService.clubId(subject));
        return new ResponseEntity<>(idToken, HttpStatus.OK);
    }


}


