package global.service;

import tools.interceptors.PQMInterceptor;

import javax.ejb.Stateless;
import javax.interceptor.Interceptors;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by myuser on 23.05.2017.
 */
@Interceptors(PQMInterceptor.class)
public class PQMBean {

    @PersistenceContext
    protected EntityManager em;


}
