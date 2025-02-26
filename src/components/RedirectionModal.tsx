import Modal from "./Modal";
import Button from "./Button";

interface Props {
	link: string;
	visible: boolean;
	setVisible: React.SetStateAction<boolean>;
}

const RedirectionModal = ({ link, visible, setVisible }: Props) => {
	return (
		visible && (
			<Modal
				title={<>confirm redirection</>}
				buttons={
					<>
						<Button
							onClick={() => {
								window.open(link);
								setVisible(false);
							}}
						>
							yeah, take me there
						</Button>
						<Button
							priority={1}
							onClick={() => {
								setVisible(false);
							}}
						>
							nuh uh
						</Button>
					</>
				}
				visible={visible}
			>
				this link is taking you to the following page:
				<div className="px-3 py-2 my-3 bg-green/5 rounded-full">{link}</div>
				are you <i>sure</i> you'd like to go?
			</Modal>
		)
	);
};

export default RedirectionModal;
