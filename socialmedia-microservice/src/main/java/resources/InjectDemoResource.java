package resources;

import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

/**
 * Just a demo of how to use other parameters.
 * It is also possible to use @FormParam to accept html forms, but it is not very common to use with rest apis.
 */

@Stateless
@Path("/injectdemo")
@Produces(MediaType.TEXT_PLAIN)
@Consumes(MediaType.TEXT_PLAIN)
public class InjectDemoResource {


    /**
     * Matrix params are separating the queryparameter with a semicolon instead of a question mark. Its not very common to use.
     * Set Cookie with Postman Plugin: https://www.getpostman.com/docs/interceptor_cookies. (Header Key: Cookie, Value: name=cookievalue)
     * @param matrixParam
     * @return value of matrixPram
     */
    @GET
    @Path("/annotations")
    public String getPramsUsingAnnotations(@MatrixParam("param") String matrixParam,
                                           @HeaderParam("customHeader") String header,
                                           @CookieParam("name") String cookie) {
        return "matrix pram: " + matrixParam + ", header param: " + header + ", cookie name: " + cookie;
    }

    /**
     *@Context can only be used with specific Classes. Using context a lot of info like the whole header and all cookeis can be accessed.
     */
    @GET
    @Path("context")
    public String getParamsUsingContext(@Context UriInfo uriInfo, @Context HttpHeaders  headers) {
        String path = uriInfo.getAbsolutePath().toString();
        String cookies = headers.getCookies().toString();
        return "path: " + path + " cokies: " + cookies;
    }



}
