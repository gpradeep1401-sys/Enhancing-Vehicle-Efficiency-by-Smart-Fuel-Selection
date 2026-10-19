from flask import app
import mysql.connector
from mysql.connector import Error
db_config = {
    'user': 'root',
    'password': 'jagadish',
    'host': 'localhost',
    'database': 'fuel'
}
cnx = mysql.connector.connect(**db_config)
cursor = cnx.cursor()


@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    query = "INSERT INTO users (username, password, email) VALUES (%s, %s, %s)"
    cursor.execute(query, (username, password, email))
    cnx.commit()

    return jsonify({'status': 'success'})


@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    query = "SELECT * FROM users WHERE username = %s AND password = %s"
    cursor.execute(query, (username, password))
    result = cursor.fetchone()

    if result:
        return jsonify({'status': 'success'})
    else:
        return jsonify({'status': 'error', 'message': 'Invalid credentials'})


if __name__ == '__main__':
    app.run(debug=True)
