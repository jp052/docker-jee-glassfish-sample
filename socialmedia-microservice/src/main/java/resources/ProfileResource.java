package resources;

import persistence.model.Comment;
import persistence.model.Profile;
import service.CommentServiceMock;
import service.ProfileServiceMock;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Stateless
@Path("/profiles")
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class ProfileResource {

    @Inject
    private ProfileServiceMock profileService;

    @Inject
    private CommentServiceMock commentService;

    @POST
    public Profile createProfile(Profile profile) {
        Profile createdProfile = profileService.createProfile(profile);
        return createdProfile;
    }

    @GET
    @Path("/{profileName}")
    public Profile readProfile(@PathParam("profileName") String profileName) {
        Profile profileById = profileService.readProfile(profileName);
        return profileById;
    }

    @PUT
    @Path("/{profileName}")
    public Profile updateProfile(@PathParam("profileName") String profileName, Profile profile) {
        //TODO check that profileName matches profile
        profile.setProfileName(profileName);
        Profile updatedProfile = profileService.updateProfile(profile);
        return updatedProfile;
    }

    @DELETE
    @Path("/{profileName}")
    public void deleteProfile(@PathParam("profileName") String profileName) {
        profileService.deleteProfile(profileName);
    }

    @GET
    public List<Profile> listProfile() {
        List<Profile> allProfiles = profileService.listProfiles();
        return allProfiles;
    }

    @GET
    @Path("/list/comments")
    public List<Comment> listComments() {
        List<Comment> allComments = commentService.listComments(1);
        return allComments;
    }

}
