package com.radd.models;

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
private Attributes attribute;
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
private double strGain;
private double agiGain;
private double intGain;
//other
private String iconUrl;
private String imageUrl;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getLocalizedName() {
	return localizedName;
}
public void setLocalizedName(String localizedName) {
	this.localizedName = localizedName;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Attributes getAttribute() {
	return attribute;
}
public void setAttribute(Attributes attribute) {
	this.attribute = attribute;
}
public int getBaseHealth() {
	return baseHealth;
}
public void setBaseHealth(int baseHealth) {
	this.baseHealth = baseHealth;
}
public int getBaseMana() {
	return baseMana;
}
public void setBaseMana(int baseMana) {
	this.baseMana = baseMana;
}
public int getAttackRange() {
	return attackRange;
}
public void setAttackRange(int attackRange) {
	this.attackRange = attackRange;
}
public int getBaseArmour() {
	return baseArmour;
}
public void setBaseArmour(int baseArmour) {
	this.baseArmour = baseArmour;
}
public int getBaseSpeed() {
	return baseSpeed;
}
public void setBaseSpeed(int baseSpeed) {
	this.baseSpeed = baseSpeed;
}
public int getBaseDmg() {
	return baseDmg;
}
public void setBaseDmg(int baseDmg) {
	this.baseDmg = baseDmg;
}
public int getBaseStr() {
	return baseStr;
}
public void setBaseStr(int baseStr) {
	this.baseStr = baseStr;
}
public int getBaseAgi() {
	return baseAgi;
}
public void setBaseAgi(int baseAgi) {
	this.baseAgi = baseAgi;
}
public int getBaseInt() {
	return baseInt;
}
public void setBaseInt(int baseInt) {
	this.baseInt = baseInt;
}
public double getStrGain() {
	return strGain;
}
public void setStrGain(double strGain) {
	this.strGain = strGain;
}
public double getAgiGain() {
	return agiGain;
}
public void setAgiGain(double agiGain) {
	this.agiGain = agiGain;
}
public double getIntGain() {
	return intGain;
}
public void setIntGain(double intGain) {
	this.intGain = intGain;
}
public String getIconUrl() {
	return iconUrl;
}
public void setIconUrl(String iconUrl) {
	this.iconUrl = iconUrl;
}
public String getImageUrl() {
	return imageUrl;
}
public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
}

}
