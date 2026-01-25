import { ScreenContainer } from '../ScreenContainer';
import { Button } from '../Button';

type Screen01PermissionProps = {
  onNext: () => void;
};

export function Screen01Permission({ onNext }: Screen01PermissionProps) {
  return (
    <ScreenContainer showBack={false}>
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-3xl tracking-tight text-gray-900">
            Before we begin —
          </h1>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              This is not a test.
            </p>
            <p className="text-sm text-gray-500">
              There are no right answers.
            </p>
          </div>
        </div>

        <Button onClick={onNext}>Continue</Button>
      </div>
    </ScreenContainer>
  );
}
