package yay.ensat.ma.server.security.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.security.models.AppUser;

public interface AppUserRepository extends JpaRepository<AppUser,Long> {
    AppUser findByUsername(String username);
}
