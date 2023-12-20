package yay.ensat.ma.server.security.services;


import yay.ensat.ma.server.models.Member;
import yay.ensat.ma.server.security.models.AppUser;


public interface SecurityService {
    AppUser saveNewUser(Member member);
    AppUser loadUserByUserName (String username);



}
