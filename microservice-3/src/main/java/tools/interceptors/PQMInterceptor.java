package tools.interceptors;

import javax.interceptor.AroundInvoke;
import javax.interceptor.InvocationContext;

/**
 * Created by myuser on 23.05.2017.
 */
public class PQMInterceptor {

    @AroundInvoke
    public Object intercept(InvocationContext context) throws Exception {
        System.out.println("SimpleInterceptor - Logging BEFORE calling method :"+context.getMethod().getName() );
        Object result = context.proceed();
        System.out.println("SimpleInterceptor - Logging AFTER calling method :"+context.getMethod().getName() );
        return result;
    }
}
