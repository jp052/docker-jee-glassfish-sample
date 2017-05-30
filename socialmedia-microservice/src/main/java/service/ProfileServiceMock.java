package service;

import persistence.DatabaseMock;
import persistence.model.Profile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProfileServiceMock {
    private Map<String, Profile> profiles = DatabaseMock.getProfiles();

    public ProfileServiceMock() {
        profiles.put("profile1", new Profile(1L, "profile1", "first", "last"));
    }

    public Profile createProfile(Profile profile) {
        profile.setId(profiles.size() + 1);
        profiles.put(profile.getProfileName(), profile);
        return profile;
    }

    public Profile readProfile(String profileName) {
        return profiles.get(profileName);
    }

    public Profile updateProfile(Profile profile) {
        if(profile.getProfileName().isEmpty()) {
            return null;
        }
        profiles.put(profile.getProfileName(), profile);
        return profile;
    }

    public void deleteProfile(String profileName) {
        profiles.remove(profileName);
    }

    public List<Profile> listProfile() {
        return new ArrayList<>(profiles.values());
    }


}
