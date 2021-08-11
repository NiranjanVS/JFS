1) MavenApp

     -This is a Maven web project created in Eclipse
     -File->project->maven project
     -catalogs-> internal -> maven-archetype-webapp 1.0
     -We added servlet dependency in it (copied from meven repo)
     -for building project -> run as -> maven install
     -After that we run it on tomcat server
     -Then added the jetty plugin for auto building. Added the plugin and run it through command line 
      using command mvn jetty:run
     -After that, we run the project from browser using jetty default assigned port 8080
     -After that, we added the meven-cargo embedded tomcat plugin and set its configuration
      And then run it using assigned port

2) QuickDemo
 
     -This is a basic maven project created in Eclipse IDE.
     -File->project->maven project
     -catalogs-> internal -> maven-archetype-quickstart 1.1

3) Trail>TrialA - 
 
     -This is a maven project created using command line.
     -The command used to create is: mvn archetype:generate
     -Then carried the maven project through various life cycle phases - validate, compile, test, package, verify

4) Git commands - This file consist of basic Git commands