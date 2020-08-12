package heroService.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Abilities {

//basic information
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int abilityId;
	private String abilityName;
	private String imageUrl;
	private boolean activeSkill;
	private String abilityBehavior;
	private String dmgType;
	private String bkbPierce;
	private String description;
//information regarding the skill stats
	private String mana_cost;
	private boolean agsSkill;
	private String coolDown;
//hero information
	@ManyToOne
	@JoinColumn(name = "id")
	private Hero heroId;
//getters and setters
	public int getAbilityId() {
		return abilityId;
	}
	public void setAbilityId(int abilityId) {
		this.abilityId = abilityId;
	}
	public String getAbilityName() {
		return abilityName;
	}
	public void setAbilityName(String abilityName) {
		this.abilityName = abilityName;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public boolean isActiveSkill() {
		return activeSkill;
	}
	public void setActiveSkill(boolean activeSkill) {
		this.activeSkill = activeSkill;
	}
	public String getAbilityBehavior() {
		return abilityBehavior;
	}
	public void setAbilityBehavior(String abilityBehavior) {
		this.abilityBehavior = abilityBehavior;
	}
	public String getDmgType() {
		return dmgType;
	}
	public void setDmgType(String dmgType) {
		this.dmgType = dmgType;
	}
	public String getBkbPierce() {
		return bkbPierce;
	}
	public void setBkbPierce(String bkbPierce) {
		this.bkbPierce = bkbPierce;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getMana_cost() {
		return mana_cost;
	}
	public void setMana_cost(String mana_cost) {
		this.mana_cost = mana_cost;
	}
	public boolean isAgsSkill() {
		return agsSkill;
	}
	public void setAgsSkill(boolean agsSkill) {
		this.agsSkill = agsSkill;
	}
	public String getCoolDown() {
		return coolDown;
	}
	public void setCoolDown(String coolDown) {
		this.coolDown = coolDown;
	}
	public Hero getHeroId() {
		return heroId;
	}
	public void setHeroId(Hero heroId) {
		this.heroId = heroId;
	}
}
