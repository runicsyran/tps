import java.net.*;
import java.io.*;

public class Main {
    public static void main(String[] args){
        try{
            URL cernHome = new URL("http://www.cern.ch"); // Crea un oggetto URL
            HttpURLConnection cernHomeConnection = (HttpURLConnection) cernHome.openConnection(); // Apre la connessione
            InputStream in = cernHomeConnection.getInputStream(); // Apre lo stream di input (sequenza binaria di dati)
            byte [] data = new byte[1024]; // Crea un array di byte
            in.read(data); // Legge i dati dallo stream di input e li memorizza nell'array di byte
            
        } catch (MalformedURLException e){
            throw new RuntimeException(e);
        } catch (IOException e){
            throw new RuntimeException(e);
        }

    }
}