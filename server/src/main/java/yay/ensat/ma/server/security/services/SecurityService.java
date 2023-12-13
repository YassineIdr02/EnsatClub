package yay.ensat.ma.server.security.services;
import yay.ensat.ma.server.security.models.AppUser;


public interface SecurityService {
    AppUser saveNewUser(AppUser appUser);
    AppUser loadUserByUserName (String username);



}
