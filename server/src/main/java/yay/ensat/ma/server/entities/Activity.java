package yay.ensat.ma.server.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    private String createdAt;

    @ManyToOne
    private Club club;


}
