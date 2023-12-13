package yay.ensat.ma.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import yay.ensat.ma.server.models.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {

}
