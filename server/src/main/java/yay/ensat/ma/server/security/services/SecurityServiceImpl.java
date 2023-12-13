package yay.ensat.ma.server.security.services;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.security.models.AppUser;
import yay.ensat.ma.server.security.repositories.AppUserRepository;
import java.util.UUID;


@Service
@Transactional
public class SecurityServiceImpl implements SecurityService {
    private AppUserRepository appUserRepository;
    //private PasswordEncoder passwordEncoder;
    //private EmailSenderService emailSenderService;




    public SecurityServiceImpl(AppUserRepository appUserRepository ) {
        this.appUserRepository = appUserRepository;
        //this.passwordEncoder = passwordEncoder;
       // this.emailSenderService = emailSenderService;
    }


   /* @Override
    public AppUser saveNewUser(Member member) {
        String fullUUID = UUID.randomUUID().toString();
        String username = member.getName()+fullUUID.substring(0, 3);
        String password =fullUUID.substring(0, 9);
        AppUser appUser= new AppUser();
        appUser.setUsername(username);
        appUser.setMember(member);
        String authority = member.getRole().equals("President")?"adminClub":"member";
        appUser.setAuthority(authority);
        appUser.setPassword(passwordEncoder.encode(password));
        AppUser savedAppuser = appUserRepository.save(appUser);
       emailSenderService.sendEmail("harrakyoussef18@gmail.com","Bienvenue au club CDH",
                "Your Credentials are :\n"+"username: "+username+"\n"+"password: "+password);
        return savedAppuser;


    }*/


    @Override
    public AppUser saveNewUser(AppUser appUser) {

        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser loadUserByUserName(String username) {
        return appUserRepository.findByUsername(username);
    }
}
