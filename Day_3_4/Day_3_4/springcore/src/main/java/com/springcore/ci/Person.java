package com.springcore.ci;

public class Person {

	private String name;
	private int personId;
	private Cert cert;

	public Person(String name, int personId, Cert cert) {
		super();
		this.name = name;
		this.personId = personId;
		this.cert = cert;
	}

	@Override
	public String toString() {
		return this.name+" : "+this.personId+" : "+this.cert.name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPersonId() {
		return personId;
	}

	public void setPersonId(int personId) {
		this.personId = personId;
	}

}
