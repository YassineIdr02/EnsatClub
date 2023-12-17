package yay.ensat.ma.server.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Data @AllArgsConstructor  @NoArgsConstructor
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String photo; // url
    private String description;
    private String type;
    private String content;
    private Date createdAt;
    @ManyToOne
    private Gallery gallery;


    @ManyToOne
    private Club club;
}
