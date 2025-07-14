import { useParams } from "react-router-dom";
import { FileForm } from "../../../../components/Forms/FileForm";

export function CreateFile() {
  const { topicId } = useParams();

  return (
    <div>
      <FileForm topicId={topicId || ""} />
    </div>
  );
}
