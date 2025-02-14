import java.net.*;
import java.io.*;

public class Main {
    public static void main(String[] args){
        try{
            URL cernHome = new URL("http://www.cern.ch");
            HttpURLConnection cernHomeConnection = (HttpURLConnection) cernHome.openConnection();
        } catch (MalformedURLException e){
            throw new RuntimeException(e);
        } catch (IOException e){
            throw new RuntimeException(e);
        }

    }
}