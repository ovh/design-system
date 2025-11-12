import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Toggle, ToggleControl, ToggleLabel } from '@ovhcloud/ods-react';

describe('Toggle', () => {
  it('should fire onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <Toggle onCheckedChange={handleCheckedChange}>
        <ToggleControl />
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    
    expect(toggle).not.toBeChecked();
    expect(handleCheckedChange).not.toHaveBeenCalled();

    await user.click(toggle);
    
    expect(toggle).toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(
      expect.objectContaining({
        checked: true,
      })
    );

    await user.click(toggle);
    
    expect(toggle).not.toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledTimes(2);
    expect(handleCheckedChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        checked: false,
      })
    );
  });

  it('should respect defaultChecked prop', () => {
    render(
      <Toggle defaultChecked>
        <ToggleControl />
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeChecked();
  });

  it('should respect checked prop (controlled)', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    const { rerender } = render(
      <Toggle checked={false} onCheckedChange={handleCheckedChange}>
        <ToggleControl />
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();

    await user.click(toggle);
    
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(
      expect.objectContaining({
        checked: true,
      })
    );

    rerender(
      <Toggle checked={true} onCheckedChange={handleCheckedChange}>
        <ToggleControl />
      </Toggle>
    );

    expect(toggle).toBeChecked();
  });

  it('should be disabled when disabled prop is true', () => {
    render(
      <Toggle disabled>
        <ToggleControl />
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeDisabled();
  });

  it('should not fire onCheckedChange when disabled', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <Toggle disabled onCheckedChange={handleCheckedChange}>
        <ToggleControl />
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    
    await user.click(toggle);
    
    expect(handleCheckedChange).not.toHaveBeenCalled();
    expect(toggle).not.toBeChecked();
  });

  it('should toggle when clicking on the label text', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(
      <Toggle onCheckedChange={handleCheckedChange}>
        <ToggleControl />
        <ToggleLabel>Toggle Label Text</ToggleLabel>
      </Toggle>
    );

    const toggle = screen.getByRole('checkbox');
    const labelText = screen.getByText('Toggle Label Text');
    
    expect(toggle).not.toBeChecked();

    await user.click(labelText);
    
    expect(toggle).toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(
      expect.objectContaining({
        checked: true,
      })
    );
  });

  it('should toggle state when clicking label in controlled mode', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    const { rerender } = render(
      <Toggle checked={false} onCheckedChange={handleCheckedChange}>
        <ToggleControl />
        <ToggleLabel>Autoscale Toggle False</ToggleLabel>
      </Toggle>
    );

    const labelText = screen.getByText('Autoscale Toggle False');
    
    await user.click(labelText);
    
    expect(handleCheckedChange).toHaveBeenCalledTimes(1);
    expect(handleCheckedChange).toHaveBeenCalledWith(
      expect.objectContaining({
        checked: true,
      })
    );

    rerender(
      <Toggle checked={true} onCheckedChange={handleCheckedChange}>
        <ToggleControl />
        <ToggleLabel>Autoscale Toggle True</ToggleLabel>
      </Toggle>
    );

    expect(screen.getByText('Autoscale Toggle True')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});

