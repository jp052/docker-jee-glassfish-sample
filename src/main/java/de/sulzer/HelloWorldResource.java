package main.java.de.sulzer;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("test")
public class HelloWorldResource {
    @GET
    public String show() {
        return "Hello World 2!";
    }
}
