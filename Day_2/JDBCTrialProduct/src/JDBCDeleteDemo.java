import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class JDBCDeleteDemo {

	public static void main(String[] args) {
		
		
		String url = "jdbc:mysql://localhost:3306/telstra";
		
		String username = "root";
		String password = "Abhijeet";
		String deleteCommand = "delete from product where price=500";
		
		int i=0;
		
		Connection cn = null;
		Statement st = null;
		
		try{
			cn = DriverManager.getConnection(url, username, password);
			st = cn.createStatement();
			
			i = st.executeUpdate(deleteCommand);
			
			System.out.println(i+" Deleted.. !!");
			
		} catch (SQLException e) {
			e.printStackTrace();
		}	
		

	}

}
