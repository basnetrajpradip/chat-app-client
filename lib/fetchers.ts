import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:4000/api",
});

export async function fetchUsers(userID: string, setUsers: any) {
  const res = await fetcher("/users");
  setUsers(res.data.filter((user: any) => user._id !== userID));
}

export async function fetchMessages(sender: any, receiver: any, setMessages: any) {
  if (sender && receiver) {
    try {
      const res = await fetcher(`/messages?sender=${sender?.username}&receiver=${receiver.username}`);
      setMessages(res.data);
    } catch (err) {
      console.log(err);
      setMessages(null);
    }
  }
}
