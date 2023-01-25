import csvtojson from "csvtojson";

export class DataProvider<
  T extends {
    Assignment: string;
    "Organization Name": string;
  }
> {
  readonly csvPath: string;
  private EntriesPromise: Promise<T[]> | null = null;

  constructor(csvPath: string) {
    this.csvPath = csvPath;
  }

  async getEntries(): Promise<T[]> {
    if (this.EntriesPromise) {
      return await this.EntriesPromise;
    }

    this.EntriesPromise = (async () => {
      const res = await fetch(this.csvPath);
      const csv = await res.text();

      const data: T[] = await csvtojson().fromString(csv);

      return data;
    })();

    return await this.EntriesPromise;
  }

  async getEntryFromAssignment(assignment: string): Promise<T | undefined> {
    const data = await this.getEntries();
    const entry = data.find((entry) => entry.Assignment === assignment);

    return entry;
  }

  async searchAssignment(assignment: string): Promise<T[]> {
    const data = await this.getEntries();
    const entries = data.filter((entry) => {
      const Assignment = entry.Assignment;
      if (
        Assignment.startsWith(assignment) ||
        assignment.startsWith(Assignment)
      ) {
        return true;
      }
      return false;
    });
    return entries;
  }

  async searchOrganization(organization_: string): Promise<T[]> {
    const organization = organization_.toLowerCase();
    const data = await this.getEntries();
    const entries = data.filter((entry) => {
      const Organization = entry["Organization Name"].toLowerCase();
      if (Organization == organization) {
        return true;
      }
      return false;
    });
    return entries;
  }

  async getOrganizations(): Promise<Set<string>> {
    const data = await this.getEntries();
    const organizations = new Set<string>();
    data.forEach((entry) => {
      organizations.add(entry["Organization Name"]);
    });
    return organizations;
  }

  async getLength(): Promise<number> {
    const data = await this.getEntries();
    return data.length;
  }
}
