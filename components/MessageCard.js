const MessageCard = ({ author, date, content, affiliation }) => {
    return (
      <div className="message-card">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{author}</span>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <p className="text-gray-700 mb-2">
          {content}
        </p>
        {affiliation && (
          <div className="text-gray-500 text-sm">
            {affiliation}
          </div>
        )}
      </div>
    );
  };
  
  export default MessageCard;