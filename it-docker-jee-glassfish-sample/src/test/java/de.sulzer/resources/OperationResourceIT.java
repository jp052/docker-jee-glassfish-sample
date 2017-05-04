package de.sulzer.resources;

import org.junit.Before;
import org.junit.Test;

import javax.json.Json;
import javax.json.JsonObject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static javax.ws.rs.client.Entity.json;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

public class OperationResourceIT {
    private Client client;
    private WebTarget webTarget;
    static final String ADDITION_URI = "http://192.168.99.100:8080/docker-jee-glassfish-sample-1.0/resources/operations/addition";

    @Before
    public void init() {
        this.client = ClientBuilder.newClient();
        this.webTarget = this.client.target(ADDITION_URI);
    }

    @Test
    public void addition() {
        JsonObject input = Json.createObjectBuilder().
                add("a", 2).
                add("b", 21).
                build();
        Response response = this.webTarget.
                request(MediaType.APPLICATION_JSON).
                post(json(input));
        assertThat(response.getStatus(), is(200));
        JsonObject jsonResult = response.readEntity(JsonObject.class);
        int result = jsonResult.getJsonNumber("result").intValue();
        assertThat(result, is(23));
    }
}
