package heroService.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Abilities {

@Id
private String name;

private String description;
private int mana_cost;
private int id;

}
