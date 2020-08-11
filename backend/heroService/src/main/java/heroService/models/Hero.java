package heroService.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Hero{

//Id and Attribute	
@Id
private int id;
private String localizedName;
private String name;
@ManyToOne
@JoinColumn(name="attribute")
private Attributes primaryAttribute;
//base stats
private int baseHealth;
private int baseMana;
private int attackRange;
private int baseArmour;
private int baseSpeed;
private int baseDmg;
private int baseStr;
private int baseAgi;
private int baseInt;
//stat gains
private int strGain;
private int agiGain;
private int intGain;
//other
private String iconUrl;
private String imageUrl;

}
