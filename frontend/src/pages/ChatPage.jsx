import ProfileHeader from "../components/ProfileHeader.jsx";
import ActiveTabSwitch from "../components/ActiveTabSwitch.jsx";
import ChatsList from "../components/ChatsList.jsx";
import ContactList from "../components/ContactList.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder.jsx";
import { useChatStore } from "../store/useChatStore";

function ChatPage() {

  const { activeTab, selectedUser } = useChatStore();

  return (
  <div className="relative w-full max-w-6xl mx-auto h-[800px] bg-blue-950">
    {/* Left Side */}
    <div className="flex w-full h-full">
    <div className="w-1/3 bg-slate-500">
      <ProfileHeader />
      <ActiveTabSwitch />

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {activeTab === "chats" ? <ChatsList /> : <ContactList />}
      </div>
    </div>

    {/* Right Side */}
    <div className="flex-1 flex flex-col">
      {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
    </div>
  </div> 
  </div>
  );
}

export default ChatPage;
