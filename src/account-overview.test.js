import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

describe("AccountOverview", () => {
  test("renders AccountOverview component", () => {
    const mockData = {
      supportContact: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      salesOverview: {
        successfulUploads: 100,
        uploads: 200,
        linesSaved: 150,
        linesAttempted: 300,
        uploadPercentage: 50,
        linesSavedPercentage: 60,
      },
    };

    render(<AccountOverview data={mockData} />);

    expect(screen.getByText("YOUR FEEFO SUPPORT CONTACT")).toBeInTheDocument();

    expect(screen.getByText("Sales")).toBeInTheDocument();

    expect(screen.getByText("John Doe")).toBeInTheDocument();

    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();

    expect(screen.getByText("0203 362 4209")).toBeInTheDocument();

    expect(screen.getByText("Sales")).toBeInTheDocument();

    expect(
      screen.getByText("You had 100 uploads and 150 lines added")
    ).toBeInTheDocument();

    expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();

    expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  });
});
