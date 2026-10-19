import mysql.connector
import bcrypt


def get_db_connection():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="password",
        database="user_management"
    )
    return connection


def register_user(full_name, email, plain_password):
    db = get_db_connection()
    cursor = db.cursor()

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    if user:
        print("Email is already registered!")
        return False

    hashed_password = bcrypt.hashpw(
        plain_password.encode('utf-8'), bcrypt.gensalt())

    query = "INSERT INTO users (full_name, email, password) VALUES (%s, %s, %s)"
    cursor.execute(query, (full_name, email, hashed_password.decode('utf-8')))
    db.commit()

    print(f"User {full_name} registered successfully!")
    cursor.close()
    db.close()
    return True


def login_user(email, plain_password):
    db = get_db_connection()
    cursor = db.cursor()

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()

    if user:
        stored_hashed_password = user[3]
        if bcrypt.checkpw(plain_password.encode('utf-8'), stored_hashed_password.encode('utf-8')):
            print(f"Login successful for {user[1]}!")
            return True
        else:
            print("Invalid password!")
            return False
    else:
        print("User not found!")
        return False

    cursor.close()
    db.close()


def main():
    while True:
        print("\n--- User Management System ---")
        print("1. Register")
        print("2. Login")
        print("3. Exit")
        choice = input("Enter your choice (1/2/3): ")

        if choice == '1':
            full_name = input("Enter full name: ")
            email = input("Enter email: ")
            password = input("Enter password: ")

            if register_user(full_name, email, password):
                print("Registration successful!")
            else:
                print("Registration failed!")
        elif choice == '2':
            email_login = input("Enter email for login: ")
            password_login = input("Enter password for login: ")

            if login_user(email_login, password_login):
                print("Logged in successfully!")
            else:
                print("Login failed!")
        elif choice == '3':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
