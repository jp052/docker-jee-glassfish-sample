package resources.filter;


import javax.ws.rs.QueryParam;

/**
 * Provides the possibility to extract QueryParameter into a class, to make the Resource more readable when many query parameters are used.
 */
public class MessageFilterBean {

    private @QueryParam("year") int year;
    private @QueryParam("start") int start;
    private @QueryParam("size") int size;

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }
}
