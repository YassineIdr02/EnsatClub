package yay.ensat.ma.server.models;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Date  createdAt;

    @OneToOne
    private Member president;

    @OneToMany(mappedBy = "club",fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Member> members;

    @OneToMany(mappedBy = "club", fetch = FetchType.LAZY,cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Activity> activities;

    @OneToOne(mappedBy = "club",cascade = CascadeType.ALL, orphanRemoval = true)
    private Gallery gallery;

}

