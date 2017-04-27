package de.sulzer;


import io.swagger.jaxrs.config.BeanConfig;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;


@ApplicationPath("resources")
public class RestConfiguration extends Application {
    public RestConfiguration() {
        //Swagger BeanConfig
        BeanConfig beanConfig = new BeanConfig();
        beanConfig.setVersion("1.0.0");
        beanConfig.setSchemes(new String[]{"http"});
        beanConfig.setHost("localhost:8002");
        beanConfig.setBasePath("/api");
//        beanConfig.setResourcePackage("de.sulzer");
//        beanConfig.setScan(true);
    }

    /**
     * By implementing getClasses, auto scanning of Ressources is disbaled, all new Resources need to be added here.
     * @return A set of all Resources
     */
    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new HashSet();

        resources.add(HelloWorldResource.class);
        resources.add(PetResource.class);

        resources.add(io.swagger.jaxrs.listing.ApiListingResource.class);
        resources.add(io.swagger.jaxrs.listing.SwaggerSerializers.class);

        return resources;
    }
}
