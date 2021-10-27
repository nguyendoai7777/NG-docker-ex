import { MonoTypeOperatorFunction, Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
export class OperatorUtils {
  public static getApiResponse<T = any>(apiCall: Observable<T>, initialData: T | null = null): Observable<ApiResponse<T>> {
    return apiCall.pipe(
      map((data) => ({ loading: false, data, error: null })),
      startWith({ data: initialData, error: null, loading: true }),
      catchError((error) => of({loading: false, error: error.message, data: null}))
    );
  }
}
