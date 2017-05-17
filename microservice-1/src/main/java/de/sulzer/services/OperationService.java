package de.sulzer.services;

import javax.annotation.PostConstruct;
import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static javax.ws.rs.client.Entity.json;

public class OperationService {
    /*public int add(int a, int b) {
        return a + b;
    }*/

    private Client client;
    private WebTarget webTarget;
    static final String ADDITION_URI = "http://microservice-2-service:8080/microservice-2-1.0/resources/addition";

    @PostConstruct
    public void init() {
        this.client = ClientBuilder.newClient();
        this.webTarget = this.client.target(ADDITION_URI);
    }

    public int add(int a, int b) {
        JsonObject input = Json.createObjectBuilder().
                add("a", a).
                add("b", b).
                build();
        Response response = this.webTarget.
                request(MediaType.APPLICATION_JSON).
                post(json(input));

        JsonObject jsonResult = response.readEntity(JsonObject.class);
        int result = jsonResult.getJsonNumber("result").intValue();
        return result;
    }
}
