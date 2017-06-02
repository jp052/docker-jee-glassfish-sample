package resources;

import service.CommentServiceMock;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * This is a sub-resource of MessageResource.
 */
@Path("/") //the path is passed on from the parent MessageResource.
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class CommentResource {

    @Inject
    private CommentServiceMock commentService;

    @GET
    @Path("/{commentId}")
    public String read(@PathParam("commentId") long commentId) {
        return "test comment read" + commentId;
    }

    @GET
    public String list() {
        return "test comment list";
    }

}
