import { EditIcon, HeartIcon, ReplyIcon, TrashIcon } from 'lucide-react';
import { CommentIcons } from './CommentIcons';
import { Card, CardContent } from './ui/card';
import { useCommentStore } from '@/store/store';
import { useState } from 'react';
import { ReplyForm } from './ReplyForm';

type CommentCardProps = {
  postId?: number;
  body: string;
  userName?: string;
  name: string;
  parentId: number;
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'short',
});

export const CommentCard = ({
  // postId,
  body,
  name,
  userName,
  parentId,
}: CommentCardProps) => {
  const removeComment = useCommentStore((state) => state.removeComment);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsAcive] = useState(false);

  const ReplyHandler = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsAcive(true);
    } else {
      setIsOpen(false);
      setIsAcive(false);
    }
  };

  return (
    <div className="flex-1">
      <Card className="w-full border shadow-sm rounded-md mt-4 p-2 bg-slate-50 dark:bg-slate-950 dark:border ">
        <div className="2xs:flex items-center justify-between">
          <div className="flex  items-center gap-2">
            <span className="text-muted-foreground font-bold">{name} </span>
            <span
              className={`   ${
                userName == null && 'hidden'
              } text-sm font-normal text-muted-foreground sm:ml-4 `}
            >
              Reply to
            </span>
            <span
              className={`${
                userName == null && 'hidden'
              } text-blue-500 cursor-pointer font-normal`}
            >
              {`@${userName}`}
            </span>
          </div>
          <span className="text-muted-foreground text-sm ">
            {dateFormatter.format(new Date())}
          </span>
        </div>
        <CardContent className="p-4">
          <div className="">{body}</div>
        </CardContent>
        <div className="flex gap-2 ">
          <CommentIcons icon={<HeartIcon className="w-5" />} aria-label="Like">
            2
          </CommentIcons>

          <CommentIcons
            isActive={isActive}
            icon={<ReplyIcon onClick={ReplyHandler} className="w-5" />}
            aria-label="Reply"
          />
          <CommentIcons icon={<EditIcon className="w-5" />} aria-label="Edit" />
          <CommentIcons
            icon={
              <TrashIcon
                onClick={() => removeComment(parentId)}
                className="w-5"
              />
            }
            aria-label="Delete"
            color="red"
          />
        </div>
      </Card>
      <div className={`${isOpen && 'mt-4'}`}>
        {isOpen && (
          <ReplyForm
            autoFocus
            userName={name}
            onClose={() => {
              setIsOpen(false);
              setIsAcive(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
