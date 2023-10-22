import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => (
  <>
    <Heading>{issue.title}</Heading>
    <Flex gap={"3"} my={"2"}>
      <IssueStatusBadge status={issue.status} />
      <Text>{issue.create_at.toDateString()}</Text>
    </Flex>
    <Card className="prose max-w-full" mt={"4"}>
      <ReactMarkdown>{issue.description}</ReactMarkdown>
    </Card>
  </>
);

export default IssueDetails;
