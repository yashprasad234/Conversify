import { create } from "zustand";
import { useUserStore } from "./userStore";

// useChatStore state shared across the app, state management using ZUSTAND
export const useChatStore = create((set) => ({
  chatId: null, // chatId of the currentChat
  user: null, // the reciever of this chat
  isCurrentUserBlocked: false, // current user is blocked
  isReceiverBlocked: false, // receiver is blocked
  changeChat: (chatId, user) => {
    // function to change chat
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {
      return set({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBlocked: false,
      });
    }

    // CHECK IF RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: true,
      });
    } else {
      return set({
        chatId,
        user,
        isCurrentUserBlocked: false,
        isReceiverBlocked: false,
      });
    }
  },

  changeBlock: () => {
    // function to block the receiver in current chat
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
  resetChat: () => {
    set({
      chatId: null,
      user: null,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
    });
  },
}));
