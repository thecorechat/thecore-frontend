import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
	SkeletonDataContainer,
	SkeletonLeftItem,
	SkeletonMessageContainer,
	SkeletonRightItem,
} from "./SkeletonLoader.styled";

const SkeletonLoader = () => (
	<>
		<ul style={{ width: "100%" }}>
			<SkeletonLeftItem>
				<SkeletonMessageContainer>
					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginRight: "0.5rem", borderRadius: "10px" }}
					/>

					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0 0.5rem 0.5rem 0.5rem",
							}}
						/>
					</div>
				</SkeletonMessageContainer>
			</SkeletonLeftItem>

			<SkeletonRightItem>
				<SkeletonMessageContainer>
					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0.5rem 0 0.5rem 0.5rem",
							}}
						/>
					</div>

					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginLeft: "0.5rem", borderRadius: "10px" }}
					/>
				</SkeletonMessageContainer>
			</SkeletonRightItem>

			<SkeletonLeftItem>
				<SkeletonMessageContainer>
					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginRight: "0.5rem", borderRadius: "10px" }}
					/>

					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0 0.5rem 0.5rem 0.5rem",
							}}
						/>
					</div>
				</SkeletonMessageContainer>
			</SkeletonLeftItem>

			<SkeletonRightItem>
				<SkeletonMessageContainer>
					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0.5rem 0 0.5rem 0.5rem",
							}}
						/>
					</div>

					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginLeft: "0.5rem", borderRadius: "10px" }}
					/>
				</SkeletonMessageContainer>
			</SkeletonRightItem>

			<SkeletonRightItem>
				<SkeletonMessageContainer>
					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0.5rem 0 0.5rem 0.5rem",
							}}
						/>
					</div>

					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginLeft: "0.5rem", borderRadius: "10px" }}
					/>
				</SkeletonMessageContainer>
			</SkeletonRightItem>

			<SkeletonLeftItem>
				<SkeletonMessageContainer>
					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginRight: "0.5rem", borderRadius: "10px" }}
					/>

					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0 0.5rem 0.5rem 0.5rem",
							}}
						/>
					</div>
				</SkeletonMessageContainer>
			</SkeletonLeftItem>

			<SkeletonRightItem>
				<SkeletonMessageContainer>
					<div>
						<SkeletonDataContainer>
							<Skeleton
								width={90}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
							<Skeleton
								width={30}
								height={22}
								style={{
									borderRadius: "10px",
								}}
							/>
						</SkeletonDataContainer>

						<Skeleton
							width={240}
							height={64}
							style={{
								borderRadius: "0.5rem 0 0.5rem 0.5rem",
							}}
						/>
					</div>

					<Skeleton
						width={"2.5rem"}
						height={"2.5rem"}
						style={{ marginLeft: "0.5rem", borderRadius: "10px" }}
					/>
				</SkeletonMessageContainer>
			</SkeletonRightItem>
		</ul>
	</>
);

export default SkeletonLoader;
