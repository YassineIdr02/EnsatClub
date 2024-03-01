package yay.ensat.ma.server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import yay.ensat.ma.server.security.models.AppUser;

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
    private String email;

    @ManyToOne(cascade = CascadeType.ALL)
    private Club club;

    @OneToOne(mappedBy = "member",cascade = CascadeType.ALL, orphanRemoval = true)
    private AppUser appUser;

}
