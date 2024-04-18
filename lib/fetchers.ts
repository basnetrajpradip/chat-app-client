import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:4000/api",
});

export async function fetchUsers(userID: string, setUsers: any) {
  const res = await fetcher("/users");
  setUsers(res.data.filter((user: any) => user._id !== userID));
}

export async function fetchMessages(sender: any, reciever: any, setMessages: any) {
  if (sender && reciever) {
    try {
      const res = await fetcher(`/messages?sender=${sender?.username}&reciever=${reciever.username}`);
      setMessages(res.data);
    } catch (err) {
      console.log(err);
      setMessages(null);
    }
  }
}
