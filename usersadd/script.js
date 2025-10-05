body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 20px 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  text-align: center;
  width: 300px;
}

.input-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

#username {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#addBtn {
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#addBtn:hover {
  background: #0056b3;
}

#userList {
  list-style-type: none;
  padding: 0;
}

#userList li {
  padding: 6px;
  border-bottom: 1px solid #ddd;
}