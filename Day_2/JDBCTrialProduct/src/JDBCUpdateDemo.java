import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCUpdateDemo {

	
	public static void main(String[] args) {
		
		String url = "jdbc:mysql://localhost:3306/telstra";
		
		String username = "root";
		String password = "Abhijeet";
		String updateCommand = "update product set price =1500 where productname ='Table';";
		
		int i=0;
		
		Connection cn = null;
		Statement st = null;
		
		try{
			cn = DriverManager.getConnection(url, username, password);
			st = cn.createStatement();
			i = st.executeUpdate(updateCommand);
			
			System.out.println(i+" Updated details.. !!");
			
		} catch (SQLException e) {
			e.printStackTrace();
		}	

	}
	
}
