
export interface HttPAdapter{
    get<T>(url: string): Promise<T>;
}