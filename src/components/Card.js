import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";
import TimerIcon from "@material-ui/icons/Timer";
import picSrc from "../images/thumbnail.png";

function Card(props) {
	return (
		<div className="card">
			<img className="card-img-top" src={picSrc} alt="thumbnail" />
			<div className="card-caption">
				<h5>
					<TimerIcon className="icon-time" />
					{props.timeline}
				</h5>
			</div>
			<div className="card-body">
				<h5 className="card-title">{props.heading}</h5>
				<div className="underline"></div>
				<p className="class-count">
					<YouTubeIcon className="icon-utube" />
					{props.liveClasses}+ Live Classes
				</p>
				<div className="next-info">
					<p className="class-count">
						<BookmarkIcon className="icon-book" />
						{props.questions}+ Questions
					</p>
					<p className="class-count">
						<PlayForWorkIcon className="icon-play" />
						{props.notes}+ Notes
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
