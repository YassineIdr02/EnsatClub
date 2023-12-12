package yay.ensat.ma.server.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import yay.ensat.ma.server.security.AppUser;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String role;// role inside the club
    @ManyToOne
    private Club club;
    @OneToOne(mappedBy = "member")
    private AppUser appUser;

}
